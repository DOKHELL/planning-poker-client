// TODO: remove window?._config
// TODO: enum or type for env variables
export default (variable: string) => window?._config?.[variable] || import.meta.env[variable]
