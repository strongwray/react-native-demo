//本地存储
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
class LocalStorage {

  constructor() {
    this.storage = new Storage({
      size: 1000,
      storageBackend: AsyncStorage,
      defaultExpires: null,
      enableCache: true,
      sync: {
      }
    })
  }

  addLocalData(key,data){ //存储data
    this.storage.save({
      key: key,
      rawData:data,
        expires: null
      })
  }

  getLocalData(key,callback){ //获取data
    this.storage.load({
      key: key,
      autoSync: true,
      syncInBackground: true
      }).then(ret => {
        callback(ret)
      }).catch(err => {
        return err
      })
  }

  removeLocalData(key){ // 删除data
    this.storage.remove({
          key:key
      });
  }

}

module.exports = LocalStorage
