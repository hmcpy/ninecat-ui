const md = require('./config');

module.exports = function(source) {
  const content = md.render(source);
  return `
    <template>
      <section>
        ${content}
      </section>
    </template>
  `;
};
