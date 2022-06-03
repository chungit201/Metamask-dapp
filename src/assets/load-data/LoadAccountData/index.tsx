import useSWR from 'swr';


const loadUserData = () => {
  return new Promise(async resolve => {
    try {
      // const tokens = await localStorage.getItem('_gameAccessToken')
      // const res = await getUserInfo()
      // store.dispatch(setAccountData(res));
      // // dispatch(action);
      // resolve(res);
    }
    catch(err) {
      resolve(null);
    }
  })
}


export const loadData = (props: any) => {
  console.log(props)
  return new Promise(async (resolve, reject) => {
    const user = await loadUserData();
    resolve({
      userData: user,
    })
  })
}

export default function useLoadUserData() {
  const {data, error}: any = useSWR("/", loadData);

  const loading = !data && !error;

  return {
    user: data?.userData,
    loading,
  }
}
