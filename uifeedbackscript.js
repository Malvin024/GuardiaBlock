chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (whitelist.some(domain => details.url.includes(domain))) {
            return {cancel: false}; // Allow requests on whitelisted sites
        } else if (customFilters.some(filter => details.url.includes(filter))) {
            chrome.browserAction.setBadgeText({text: "Blocked"});
            chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
            return {cancel: true}; // Block requests matching custom filters
        } else {
            chrome.browserAction.setBadgeText({text: ""}); // Clear badge if not blocked
            return {cancel: false}; // Allow requests not matching custom filters
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
