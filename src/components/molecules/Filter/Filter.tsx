interface FilterProps {
  categories: readonly string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const Filter = ({ categories, activeFilter, onFilterChange }: FilterProps) => {
  return (
    <div
      className="flex flex-wrap justify-center gap-3 mb-8"
      role="group"
      aria-label="Filtrar projetos por categoria"
    >
      <button
        onClick={() => onFilterChange('Todos')}
        aria-pressed={activeFilter === 'Todos'}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          activeFilter === 'Todos'
            ? 'bg-vaporwave-purple text-white'
            : 'bg-vaporwave-white-dark dark:bg-vaporwave-black-light text-vaporwave-black dark:text-vaporwave-white hover:bg-vaporwave-purple/10'
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          aria-pressed={activeFilter === category}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeFilter === category
              ? 'bg-vaporwave-purple text-white'
              : 'bg-vaporwave-white-dark dark:bg-vaporwave-black-light text-vaporwave-black dark:text-vaporwave-white hover:bg-vaporwave-purple/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
