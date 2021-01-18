import createAxiosInstance from '../services/createAxiosInstance.js';
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

// const getPlans = () => {

// };

export { registPlan };
