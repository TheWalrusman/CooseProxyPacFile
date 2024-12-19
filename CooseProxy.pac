function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "https://services-mob.panerabread.com/sso/otp/checkUsername") || shExpMatch("https://services-mob.panerabread.com/sso/otp/checkUsername", "*/ari/*")) {
        //shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // returns true
      return "DIRECT";
    } else {
      return "PROXY 192.168.8.112:8888";
    }
  }