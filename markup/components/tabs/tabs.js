$('.jsTabsControlItem').click(function () {
  var $this = $(this),
      indexTab = $this.index();

  $this.addClass('_active').siblings().removeClass('_active');

  $this.closest('.jsTabs').find('.jsTabsContent').find('.jsTabsContentItem').eq(indexTab).addClass('_active').siblings().removeClass('_active');
});