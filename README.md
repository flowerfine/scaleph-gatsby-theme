> This Theme is modified from [@opensumi/gatsby-theme](https://github.com/opensumi/gatsby-theme), thanks for their contribute.

<div align="center">
# Scaleph Gatsby Theme for website

✨ Polished Gatsby theme for documentation website.

</div>

## Features

- 🔍 Docsearch v3, React 18, Gatsby 4 supported.
- 🎨 Prerendered static site
- 🌎 Internationalization support by i18next
- 📝 Markdown-based documentation and menus
- 🏗 Unified Theme and Layout
- 🎲 Easy customized header nav
- 🧩 Built-in home page components

## Develop

```bash
yarn
yarn start
```

Visit https://localhost:8000 to preview.

## Add Dependency

```bash
cd @opensumi/gatsby-theme
yarn add shallowequal
```

or

```bash
yarn workspace @opensumi/gatsby-theme add shallowequal
```

## Q&A

### How to customise layout footer?

```js
// gatsby-browser.js
exports.wrapPageElement = ({ element, props }) => {
  return React.cloneElement(element, {
    ...props,
    ...element.props,
    // https://github.com/react-component/footer#api
    footerProps: {
      bottom: 'xxx',
    },
  });
};
```

### How to embed other markdown document in a markdown document

```markdown
`markdown:docs/common/data-mapping.zh.md`
```

_docs/common/data-mapping.zh.md_ is the path relative to the current project. It supports multiple levels of nested.

## Related libraries

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [Ant Design](https://github.com/ant-design/ant-design)
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=highlight#line-highlighting)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [react-i18next](https://react.i18next.com/)
- [docsearch](https://docsearch.algolia.com/)
