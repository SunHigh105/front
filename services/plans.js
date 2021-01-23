import createAxiosInstance from '../services/createAxiosInstance.js';
import store from '../stores/store.js';
import getDirections from './directions.js';

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

const getPlaces = async id => {
  const instance = createAxiosInstance();
  try {
    const res = await instance.post('/api/getPlaces', { plan_id: id });
    if (res.status === 200) {
      const destinations = res.data;
      // ルートと目的地をStoreに登録
      destinations
        .filter((d, i) => i + 1 < destinations.length)
        .map((d, i) => {
          getDirections(
            d.place,
            destinations[i + 1].place,
            i + 2 === destinations.length
          );
        });
      // 各地点の滞在時間をStoreに登録`・countを増やす
      destinations.map(d => {
        store.commit('increment');
        store.commit('addSpentTime', { spentTime: d.time });
      });
    }
  } catch (e) {
    console.log(e);
    alert('Get Places Failed');
  }
};

export { registPlan, getPlans, getPlaces };
