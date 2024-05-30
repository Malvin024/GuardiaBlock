var whitelist = ["example.com", "example2.com"];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (whitelist.some(domain => details.url.includes(domain))) {
            return {cancel: false}; // Allow requests on whitelisted sites
        } else {
            return {cancel: true}; // Block requests on other sites
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
