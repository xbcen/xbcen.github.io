twikoo
  .getCommentsCount({
    urls: [
      // 不包含协议、域名、参数的文章路径列表，必传参数
      "/2020/10/post-1.html",
      "/2020/11/post-2.html",
      "/2020/12/post-3.html",
    ],
    includeReply: true,
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });
