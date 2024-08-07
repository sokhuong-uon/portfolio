# Portfolio

Website: https://www.sokhuong.com

Storybook: https://ui.sokhuong.com

## Install dependencies

```bash
pnpm i
```

## Start the app

To start the development server run

```
nx serve web
```

Open your browser and navigate to http://localhost:4200/. Happy coding!

## Start storybook

Make a component and view it in storybook.

```bash
nx storybook share-ui # nx storybook lib-name
```

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

Resources:

1. [Add Tailwind to Storybook for React library inside Nx mono repo.](https://medium.com/@sokhuong.xyz/add-tailwind-to-storybook-for-react-library-inside-nx-mono-repo-6d431b57f5e6)
