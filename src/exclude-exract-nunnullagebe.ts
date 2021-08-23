export {}

type DebugType = () => void
type SomeTypes = string | number | DebugType
type FunctionType = Exclude<SomeTypes, string | number>
type NonFunctionType = Exclude<SomeTypes, DebugType>
