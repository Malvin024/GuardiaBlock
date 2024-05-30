// options.js
document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('save');
    var whitelistInput = document.getElementById('whitelist');
    var customFiltersInput = document.getElementById('customFilters');

    // Save whitelist
    saveButton.addEventListener('click', function() {
        var whitelist = whitelistInput.value.split(',').map(domain => domain.trim());
        chrome.storage.sync.set({ 'whitelist': whitelist });
    });

    // Add custom filter
    var addFilterButton = document.getElementById('addFilter');
    addFilterButton.addEventListener('click', function() {
        var customFilter = customFiltersInput.value.trim();
        chrome.storage.sync.get('customFilters', function(data) {
            var customFilters = data.customFilters || [];
            customFilters.push(customFilter);
            chrome.storage.sync.set({ 'customFilters': customFilters });
        });
    });
});
