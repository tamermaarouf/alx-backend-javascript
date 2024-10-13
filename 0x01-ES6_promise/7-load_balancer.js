#!/usr/bin/node

export default async function loadBalancer (chinaDownload, USDownload) {
  return Promise
    .race([chinaDownload, USDownload])
    .then((value) => { console.log(value); });
}
