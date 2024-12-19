function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "https://services-mob.panerabread.com/sso/otp/checkUsername")) {
      return "DIRECT";
    } else {
      return "PROXY 192.168.8.112:8888";
    }
  }