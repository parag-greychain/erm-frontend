import { useState } from "react";
import { Dropdown, Input, Checkbox, Button } from "antd";
import "./KnowledgeDropdown.scss";

const KnowledgeDropdown = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>(["Shell", "Exxonmobile"]);

  const allSources = [
    { label: "Shell", value: "Shell" },
    { label: "Exxonmobile", value: "Exxonmobile" },
    { label: "Project", value: "Project" },
  ];

  const filtered = allSources.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleClearAll = () => setSelected([]);

  const selectedLabel =
    selected.length === 0 ? "Knowledge" : `${selected.length} Selected`;

  const dropdownContent = (
    <div className="knowledge-dropdown">
      <Input
        placeholder="Search sources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="header">
        <span>{selected.length} sources selected</span>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear all
        </button>
      </div>

      <div className="checkbox-list">
        {filtered.map((item) => (
          <label key={item.value} className="checkbox-item">
            <Checkbox
              checked={selected.includes(item.value)}
              onChange={() => handleToggle(item.value)}
            >
              {item.label}
            </Checkbox>
          </label>
        ))}
      </div>

      <div className="footer">
        <Button type="text" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          className="primary-btn"
          type="primary"
          shape="round"
          onClick={() => setOpen(false)}
        >
          Select
        </Button>
      </div>
    </div>
  );

  return (
    <Dropdown
      overlay={dropdownContent}
      open={open}
      onOpenChange={setOpen}
      trigger={["click"]}
    >
      <Button className="knowledge-btn">
        <i className="erm-icon source"></i>
        <span>{selectedLabel}</span>
        <i className="erm-icon arrow-down"></i>
      </Button>
    </Dropdown>
  );
};

export default KnowledgeDropdown;
