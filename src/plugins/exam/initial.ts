import { handleHomework } from "./main";

(function() {
    const origOpen = XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function() {
        this.addEventListener("load", function() {
            if (/com\/tsenglish\/homework\/doDetail/.test(this.responseURL)) {
                handleHomework(JSON.parse(this.responseText));
            }
        });
        return origOpen.apply(this, arguments as any);
    };
})();
