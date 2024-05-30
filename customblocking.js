chrome.storage.sync.get('customFilters', function(data) {
    var customFilters = data.customFilters || [];
    
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            if (customFilters.some(filter => details.url.includes(filter))) {
                return {cancel: true}; // Block requests matching custom filters
            } else {
                return {cancel: false}; // Allow requests not matching custom filters
            }
        },
        { urls: ["<all_urls>"] },
        ["blocking"]
    );
});
