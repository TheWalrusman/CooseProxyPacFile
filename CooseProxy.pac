function FindProxyForURL(url, host) {
    if dnsDomainIs(host, "services-mob1.test.panerabread.com") {
      return "PROXY 192.168.50.93:8888";
    } else {
      return "PROXY 192.168.50.93:8888";
    }
  }