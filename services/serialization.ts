function serializeString(joinChar: string, assignChar: string, obj: any) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p) && obj[p]) {
      str.push(encodeURIComponent(p) + assignChar + encodeURIComponent(obj[p]));
    }
  return str.join(joinChar);
}

export const serializeParams = serializeString.bind(null, '&', '=');
export const serializeSearchQuery = serializeString.bind(null, '+', ':');