function redirect() {

  if (geo_countryCode == 'ES') {
    location.href = "https://pay.laniavita.com/cqg-checkout-eur?tk=XRR-CQG27-" +
      utm_source + "-" + utm_campaign + "-" + utm_medium + "-" + utm_content;
  } else if (geo_countryCode == 'CO') {
    location.href = "https://pay.laniavita.com/cqg-checkout-cop?tk=XRR-CQG27-" +
      utm_source + "-" + utm_campaign + "-" + utm_medium + "-" + utm_content;
  } else if (geo_countryCode == 'MX') {
    location.href = "https://pay.laniavita.com/cqg-checkout-mxn?tk=XRR-CQG27-" +
      utm_source + "-" + utm_campaign + "-" + utm_medium + "-" + utm_content;
  } else {
    location.href = "https://pay.laniavita.com/cqg-checkout?tk=XRR-CQG27-" +
      utm_source + "-" + utm_campaign + "-" + utm_medium + "-" + utm_content;
  }

}
