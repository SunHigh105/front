import createAxiosInstance from '../services/createAxiosInstance.js';
import store from '../stores/store.js';

/**
 * プランをDBに登録
 * @param {*} plan plan_title, hour(出発時刻(時)), minute(出発時刻(分))を含むオブジェクト
 * @param {*} places index, place, time(滞在時間)を含むオブジェクトの配列
 */
const registPlan = async (plan, places) => {
  const instance = createAxiosInstance();
  try {
    const planRes = await instance.post('/api/registPlan', plan);
    const placeRes = await instance.post('/api/registPlace', places);
    if (planRes.status === 200 && placeRes.status === 200) {
      alert('Regist Plan Success!');
    }
  } catch (e) {
    console.log(e);
    alert('Regist Plan Failed');
  }
};

/**
 * DBからプランを取得
 */
const getPlans = async () => {
  const instance = createAxiosInstance();
  store.commit('resetPlans');
  try {
    const res = await instance.post('/api/showPlan');
    if (res.status === 200) {
      store.commit('getPlans', {
        plans: res.data,
      });
    }
  } catch (e) {
    console.log(e);
    alert('Get Plans Failed');
  }
};

// const getPlaces = async id => {
//   const instance = createAxiosInstance();
//   try {
//     const res = await instance.post('/api/getPlaces', id);
//     if (res.status === 200) {
//       return res.data;
//     }
//   } catch (e) {
//     console.log(e);
//     alert('Get Places Failed');
//   }
// }

export { registPlan, getPlans };
