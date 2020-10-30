export default interface IRead<T> {
  readline(reader: (line:T)=>void): Promise<number>;
}