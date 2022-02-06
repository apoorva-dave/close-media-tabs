chrome.action.onClicked.addListener(function (thisTab) {
  chrome.tabs.create({}, function (newTab) {
      let querying = chrome.tabs.query({}, function (tabs) {
      for (let tab of tabs) {
        if (tab.id !== newTab.id) {
          let tabUrl = tab.url;
          if (tabUrl.includes("netflix") || tabUrl.includes("hotstar") || tabUrl.includes("prime") 
            || tabUrl.includes("youtube") || tabUrl.includes("linkedin") ||
            tabUrl.includes("instagram") || tabUrl.includes("facebook") || tabUrl.includes("sonyliv") ||
            tabUrl.includes("twitter") || tabUrl.includes("disney")) {
            chrome.tabs.remove(tab.id);
          }
        }
      }
    });
  });
});