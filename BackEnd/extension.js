class ScratchBlocksExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'scratchBlocksExtension',
            name: 'ScratchBlocks SVG Generator',
            blocks: [
                {
                    opcode: 'generateBase64SVG',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'generate SVG Base64 from script [SCRIPT]',
                    arguments: {
                        SCRIPT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'when flag clicked\nsay [Hello!] for (2) seconds',
                        },
                    },
                },
            ],
        };
    }

    async generateBase64SVG({ SCRIPT }) {
        try {
            const iframeWindow = await this.loadScratchBlocksIframe(SCRIPT);
            const svg = await this.extractSvgFromIframe(iframeWindow);
            const scaledSvg = this.scaleSvg(svg, 4); // Adjust scaling factor as needed
            const styledSvg = this.inlineStyles(scaledSvg);
            const base64SVG = await this.convertSvgToBase64(styledSvg);

            return base64SVG;
        } catch (error) {
            console.error("Error generating SVG:", error);
            return "Error: " + error.message;
        }
    }

    loadScratchBlocksIframe(script) {
        return new Promise((resolve, reject) => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = `http://localhost:8000/BackEnd/scratchblocks/index.html#?style=scratch3&script=${encodeURIComponent(script)}`;
            iframe.onload = () => resolve(iframe.contentWindow);
            iframe.onerror = () => reject(new Error("Failed to load ScratchBlocks iframe"));
            document.body.appendChild(iframe);
        });
    }

    extractSvgFromIframe(iframeWindow) {
        return new Promise((resolve, reject) => {
            const checkForSvg = () => {
                const svgElement = iframeWindow.document.querySelector('svg.scratchblocks-style-scratch3');
                if (svgElement) {
                    resolve(svgElement);
                } else {
                    setTimeout(checkForSvg, 100);
                }
            };
            checkForSvg();
        });
    }

    scaleSvg(svgElement, scaleFactor) {
        const width = parseInt(svgElement.getAttribute('width') || '0', 10);
        const height = parseInt(svgElement.getAttribute('height') || '0', 10);

        svgElement.setAttribute('width', width * scaleFactor);
        svgElement.setAttribute('height', height * scaleFactor);

        // Add a viewBox for better scaling
        svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);

        return svgElement;
    }

    inlineStyles(svgElement) {
        const svgClone = svgElement.cloneNode(true);
        const styleSheets = Array.from(svgElement.ownerDocument.styleSheets);

        styleSheets.forEach((styleSheet) => {
            try {
                const cssRules = styleSheet.cssRules || [];
                Array.from(cssRules).forEach((rule) => {
                    if (rule.selectorText && svgClone.querySelector(rule.selectorText)) {
                        const elements = svgClone.querySelectorAll(rule.selectorText);
                        elements.forEach((element) => {
                            const style = rule.style;
                            for (let i = 0; i < style.length; i++) {
                                const propertyName = style[i];
                                element.style.setProperty(propertyName, style.getPropertyValue(propertyName));
                            }
                        });
                    }
                });
            } catch (e) {
                console.warn("Could not inline styles for some rules: ", e);
            }
        });

        return svgClone;
    }

    convertSvgToBase64(svgElement) {
        return new Promise((resolve, reject) => {
            try {
                const serializer = new XMLSerializer();
                const svgString = serializer.serializeToString(svgElement);
                const base64 = btoa(svgString);
                resolve(`data:image/svg+xml;base64,${base64}`);
            } catch (error) {
                reject(new Error("Error converting SVG to Base64: " + error.message));
            }
        });
    }
}

Scratch.extensions.register(new ScratchBlocksExtension());
