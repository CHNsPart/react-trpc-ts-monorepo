# NPM_WORKSPACE


## TS-NODE, Express, tRPC, Vite, React, TailwindCSS

| Key                       | Value                                                                           |
| :------------------------ | ------------------------------------------------------------------------------- |
| ***name***        | npm-workspace                                                                   |
| ***version***     | 1.0.0                                                                           |
| ***description*** | monorepo with npm workspaces                                                    |
| ***main***        | index.js                                                                        |
| ***scripts***     |                                                                                 |
| *`test`*              | `npm test -w @npm_workspace/server -w @npm_workspace/client`                  |
| *`dev`*                | `npm run dev -w @npm_workspace/server & npm run dev -w @npm_workspace/client` |
| ***keywords***    | React, Express, tRPC, Node, NPM, TypeScript, Monorepo, Workspaces               |
| ***author***      | [Touhidul Islam Chayan](https://chnspart.com "Resume")                                |
| ***license***     | ISC                                                                             |
| ***workspaces***  | packages/server, packages/client                                                |

# Get started

Install the repot from the root with

```powershell
npm install
```

Then go the ***`packages/server`*** and start the contaners for `Mongo` and `Redis`

```powershell
# For the first build only
docker-compose up -d
# or
docker-compose up -d --build
```

To stop the containers

```powershell
docker-compose down
```

To Restart

```powershell
docker-compose up
```
