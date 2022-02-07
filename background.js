function OpenShortcut(location)
{
    chrome.tabs.create({ url: location });
}
