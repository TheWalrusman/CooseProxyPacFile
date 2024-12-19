function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "services-mob.panerabread.com")) {
        if (shExpMatch(url, "*/otp/checkUsername*")) {
        //if (shExpMatch(url, "*services-mob.panerabread.com*")) {
            return "DIRECT";
        } else {
            return "PROXY 192.168.50.93:8888; DIRECT";
        }
        //shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // returns true
    } else {
        return "PROXY 192.168.50.93:8888; DIRECT";
      //return "PROXY 192.168.8.112:8888; DIRECT";
      // Hi
    }
  }