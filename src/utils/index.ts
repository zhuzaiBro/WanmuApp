import AsyncStorage from '@react-native-async-storage/async-storage';

export function formatDate(date:string|number) {
    const d = new Date(date);
    return `${d.getUTCMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
}

export function debounce(delay:number = 500, callback: Function) {
  let timer:NodeJS.Timeout| undefined = void 0;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  }
}

export const storeData = async (value:any) => {
    try {
      await AsyncStorage.setItem("token",value)
    } catch (e) {
      // saving error
    }
  }

  export async function loadString(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch {
      // not sure why this would fail... even reading the RN docs I'm unclear
      return null;
    }
  };

  export const userStatus = {
    UN_LOGIN: Symbol("unLogin"),
    LOGIN: Symbol("IsLogin")
  }