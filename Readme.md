# Темплейт для старта нового приложения

## Использование:

```sh
git clone git@github.com:rtkit-ulsk/rtk-frontend-template.git <name-of-repo>
```

Для удобной разработки все завернуто в Docker.

Для старта девелопмент приложения можно использовать

```sh
# старт контейнера в воч режиме
make dev

# зайти в sh контейнера
make sh
```

Для билда под продакшен используется

```sh
make prod
```

В качестве пекедж менеджера используется [pnpm](https://pnpm.io/)

<details>
    <summary>Без докера</summary>
    Если не хочется заморачиваться с докером, то можно разрабатывать на своей тачке, для этого нужно установить зависимости и стартануть разработку.

    ```sh
    # опционально установить
    npx add -g pnpm
    pnpm install
    pnpm dev
    ```
</details>
<hr>
Для продакшена создается контейнер со статикой и простым nginx конфигом (девопсы будут довольны)

Установлены прекомит хуки, которые не позволят код с ошибками качества кода попасть в репозиторий, для этого используется husky и lint-staged для того, чтобы проверять только измененные файлы

В ходе проверки используется [eslint](https://eslint.org/) с конфигом от [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) с небольшими изменениями

Для провверки стилей используется [stylelint](https://stylelint.io/) с рекомендованными настройками

Для управлением отступами и финальной строкой используется [editorconfig](https://editorconfig.org/) (для VSCode нужно поставить расширение)

Из технологий:

- React
- Typescript
- [Redux toolkit](https://redux-toolkit.js.org/)
- PostCss (для vscode нужен [плагин](https://marketplace.visualstudio.com/items?itemName=csstools.postcss))
- [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) Все модные фичи в 1 месте
- [CssModules](https://github.com/css-modules/css-modules)
- сборщик [Vite](https://vitejs.dev/) (Вит)


## Генерация кода
Для упрощения написания ежедневной рутины есть код генерации:
- api
- component
- container
- page
- slice

Для генерации нужно в консоле выполнить:
```sh
pnpm gen [сущность] new [имя]
// ex:
pnpm gen api new user
# Loaded templates: _templates
    #    added: src/services/api/user.api.ts
    #   inject: src/store/store.ts
    #   inject: src/store/store.ts
    #   inject: src/store/store.ts
```



## HOW TO:
<details>
    <summary>Создать простой редьюссер</summary>

    В папке `store/slices` соласно [документации](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice) toolkit создать файл

    Добавить редьюссер в `store.ts` в `configureStore`
</details>

<details>
    <summary>Создать редьюссер для API эндпоинта</summary>

    В папке `services/api/` соласно [документации](https://redux-toolkit.js.org/tutorials/rtk-query#setting-up-your-store-and-api-service) rtk-query создать файл

    Добавить редьюссер в `store.ts` в `configureStore` и обавить мидлвару тудаже
</details>
