function FindProxyForURL(url, host) {
    if dnsDomainIs(host, "services-mob1.test.panerabread.com") {
      return "DIRECT";
    } else {
      return "PROXY 192.168.50.93:8888; DIRECT";
    }
  } 