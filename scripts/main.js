const site = {
  init: () => {
    // Do your thing here
  },
};

document.onreadystatechange = () => {
  if (document.readyState == 'interactive') site.init;
};
