import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
      //presets
    extends: [
      js.configs.recommended,
        //no-unused-vars
        //no-undef
        //no-cond-assign - trocar === por =
        //no-unreachable - códigos inalcansáveis ex. depois de break
      
      tseslint.configs.recommended,
        //@typescript-eslint/no-explicit-any
        //@typescript-eslint/no-unused-vars
        //@typescript-eslint/no-empty-function

      reactHooks.configs.flat.recommended,
        //react-hooks/rules-of-hooks - hooks devem ser chamados na parte superior
        //react-hooks/exhaustive-deps - conter todas as variáveis no [dep]
        //react/jsx-key
        //react/no-array-index-key

        //*OBS eslint-disable-next-line
      reactRefresh.configs.vite,
        //reactRefresh.configs.vite
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])

