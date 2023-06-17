const rules = [
  [/#{6}\s?([^\n]+)\n/g, "<h6>$1</h6>"],
  [/#{5}\s?([^\n]+)\n/g, "<h5>$1</h5>"],
  [/#{4}\s?([^\n]+)\n/g, "<h4>$1</h4>"],
  [/#{3}\s?([^\n]+)\n/g, "<h3>$1</h3>"],
  [/#{2}\s?([^\n]+)\n/g, "<h2>$1</h2>"],
  [/#{1}\s?([^\n]+)\n/g, "<h1>$1</h1>"],
  [/\*\*([^*\n]+)\*\*/g, "<b>$1</b>"],
  [/\*([^*\n]+)\*/g, "<i>$1</i>"],
  [/((\n\d\..+)+)/g, "<ol>$1</ol>"],
  [/((\n\*\s.+)+)/g, "<ul>$1</ul>"],
  [/\n\d\.([^\n]+)/g, "<li>$1</li>"],
  [/\n\*\s([^\n]+)/g, "<li>$1</li>"],
  [/\n>\s([^\n]+)/g, "<blockquote>$1</blockquote>"],
  [/!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g, '<img src="http://localhost:5000/api/photos/$2" alt="$1" style="display: block; margin: 0 auto;" />'],
  [/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>'],
  [/`([^`]+)`/g, "<code>$1</code>"],
  [/~~([^~]+)~~/g, "<del>$1</del>"],
  [/-{5,}/g, "<hr />"],
  [/([^\n]+)\n/g, "<p>$1</p>"],
];

export default {
  beforeMount(el) {
    if (el.textContent != "") {
      let html = el.textContent;
      rules.forEach(([rule, template]) => {
        html = html.replace(rule, template);
      });
      el.innerHTML = html;
    }
  },
  updated(el) {
    if (el.textContent != "") {
      let html = el.textContent;
      rules.forEach(([rule, template]) => {
        html = html.replace(rule, template);
      });
      el.innerHTML = html;
    }
  },
};