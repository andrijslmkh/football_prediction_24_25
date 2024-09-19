function comparison(data, userData) {
  let obj = {};
  const tirOneWith = 1;
  const tirOneTo = 8;
  const tirTwoWith = 9;
  const tirTwoTo = 24;
  let count = 0;
  let total = 0;

  for (const k in data) {
    for (const user in userData) {
      obj[user] = {};
      for (const keyData in data[k]) {
        for (const keyUserData in userData[user]) {
          //
          if (keyData === keyUserData) {
            let dataArray = data[k][keyData];
            let userArray = userData[user][keyUserData];

            for (let i = 0; i < dataArray.length; i++) {
              for (let k = 0; k < userArray.length; k++) {
                if (dataArray[i].id == userArray[k].id) {
                  //
                  if (dataArray[i].position == userArray[k].position) {
                    count = win(count);
                  } else if (
                    dataArray[i].position >= tirOneWith &&
                    dataArray[i].position <= tirOneTo &&
                    userArray[k].position >= tirOneWith &&
                    userArray[k].position <= tirOneTo
                  ) {
                    count = draw(count);
                  } else if (
                    dataArray[i].position >= tirTwoWith &&
                    dataArray[i].position <= tirTwoTo &&
                    userArray[k].position >= tirTwoWith &&
                    userArray[k].position <= tirTwoTo
                  ) {
                    count = draw(count);
                  } else {
                    count = lose(count);
                  }
                }
              }
            }
            total += count;
            obj[user][keyData] = count;
            obj[user].total = total;
            count = 0;
          }
        }
      }
      return obj;
    }
  }
}
