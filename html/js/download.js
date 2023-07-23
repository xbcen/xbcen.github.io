function handleKeyDown(event) {
  // 如果按键是回车
  if (event.key === 'Enter') {
    generateNewUrl();
  }
}

function generateNewUrl() {
  var user_url = document.getElementById('userUrl').value;
  var parsed_url = new URL(user_url);
  var content_id = parsed_url.searchParams.get('contentId') || 'abc';

  var old_url = "https://r2-ndr.ykt.cbern.com.cn/edu_product/esp/assets_document/abc.pkg/pdf.pdf";
  var new_url = old_url.replace('abc',content_id);
  
  var linkElement = document.getElementById('newUrlLink');
  linkElement.href = new_url;
  linkElement.textContent = "点击下载";
}
