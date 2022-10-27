
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toggleBodyScroll() {
  let body = document.getElementsByTagName("body")[0];
  body.classList.toggle("scroll-disabled");
}

function toggleMenu(menu) {
  menu.classList.toggle("menu__contentbox__visible");
}

function closeMenu(menu) {
  menu.classList.remove("menu__contentbox__visible");
}

function detectOpenPortfolioDetail() {
  var openPortfolioItem;
  var allPortfolioItems = document.querySelectorAll(".portfolio-detail__card");
  allPortfolioItems.forEach((item) => {
    var isHidden = item.classList.contains("hidden");
    if (!isHidden) {
      openPortfolioItem = item;
    }
  });
  return openPortfolioItem;
}

function openPortfolioDetail(id) {
  toggleBodyScroll();
  var parentClassId = id.substring(5);
  document.getElementById(parentClassId).classList.remove("hidden");
  document
    .querySelector(".portfolio-detail")
    .classList.add("portfolio-detail__visible");
}

function closePortfolioDetail() {
  toggleBodyScroll();
  var openPortfolioItem = detectOpenPortfolioDetail();
  openPortfolioItem.classList.add("hidden");
  document
    .querySelector(".portfolio-detail")
    .classList.remove("portfolio-detail__visible");
}

function transformPortfolioItemsToNumbers(portfolioItem) {
  if (typeof portfolioItem === "string") {
    switch (portfolioItem) {
      case "please-enter-destination":
        return 1;
      case "the-pack":
        return 2;
      case "mifsud":
        return 3;
      case "landigo":
        return 4;
      case "broth":
        return 5;
      case "mac":
        return 6;
    }
  } else {
    switch (portfolioItem) {
      case 0:
      case 6:
        return "mac";
      case 1:
      case 7:
        return "please-enter-destination";
      case 2:
        return "the-pack";
      case 3:
        return "mifsud";
      case 4:
        return "landigo";
      case 5:
        return "broth";
    }
  }
}

function goToPreviousPortfolioItem() {
  var openPortfolioItem = detectOpenPortfolioDetail();
  var openPortfolioItemNo = transformPortfolioItemsToNumbers(
    openPortfolioItem.id
  );
  var previousOpenPortfolioItemNo = transformPortfolioItemsToNumbers(
    openPortfolioItemNo - 1
  );
  openPortfolioItem.classList.add("hidden");
  document
    .getElementById(previousOpenPortfolioItemNo)
    .classList.remove("hidden");
}

function goToNextPortfolioItem() {
  var openPortfolioItem = detectOpenPortfolioDetail();
  var openPortfolioItemNo = transformPortfolioItemsToNumbers(
    openPortfolioItem.id
  );
  var previousOpenPortfolioItemNo = transformPortfolioItemsToNumbers(
    openPortfolioItemNo + 1
  );
  openPortfolioItem.classList.add("hidden");
  document
    .getElementById(previousOpenPortfolioItemNo)
    .classList.remove("hidden");
}
