export default (variable: keyof ImportMetaEnv): string => `${import.meta.env[variable]}`
