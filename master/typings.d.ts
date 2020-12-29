
declare module '*.css';
declare module '*.less';
declare module "*.png";
interface EffectAction<T>{
    type:string,
    params:T,
}

interface ReducerAction<T>{
    type:string,
    payload:T
}
interface ConnectProps<T={}>{
    dispatch:(action:(ReducerAction<T>|EffectAction<T>))=>void;
}

type ReducersMapObject<T={}, P={}> = (state:T , action:{type:string;payload:P})=>T;
