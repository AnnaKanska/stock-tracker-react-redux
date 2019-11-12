export type Action<Type> = {
  type: Type;
};

export type ActionPayload<Type, Payload> = Action<Type> & {
  payload: Payload;
};
