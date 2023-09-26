import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import useSWR from 'swr'

type Repo = {
  profileinfo:{
    nickname: string;
  }
  }

const getUserProps: GetServerSideProps<{
  data: Repo
  }> = async() => {
    const response = await fetch('https://enka.network/api/uid/804202517/?info');
    if(!response.ok){
        throw new Error('failed to load data');
    }
    let data = await response.json()
    return await data;
}

export default getUserProps;