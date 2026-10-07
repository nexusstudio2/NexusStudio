import { useState } from "react";

// Filtros + mosaico de productos. Reutilizable en cualquier catálogo
// que use las mismas clases (mf-filters, mf-mosaic, mf-item).
export default function CatalogoGrid({ categorias, productos }) {
    const [activa, setActiva] = useState("todo");

const visibles =
    activa === "todo"
    ? productos
    : productos.filter((p) => p.categoria === activa);

    return (
    <>
    <div className="mf-filters" id="catalogo">
        <div className="container">
            <div className="mf-filters-row">
            {categorias.map((c) => (
                <button
                key={c.id}
                type="button"
                className={"mf-filter-btn" + (activa === c.id ? " active" : "")}
                onClick={() => setActiva(c.id)}
                >
                {c.nombre}
                </button>
            ))}
          </div>
        </div>
      </div>

      <section className="mf-mosaic-section">
        <div className="container">
          <div className="mf-mosaic">
            {visibles.map((p) => (
              <div key={p.nombre} className={"mf-item h-" + p.altura}>
                <div className="mf-item-visual" style={{ background: p.fondo }}>
                  {p.emoji}
                </div>
                <div className="mf-item-body">
                  <h4>{p.nombre}</h4>
                  <div className="mf-item-price">
                    ${p.precio.toLocaleString("es-MX")} MXN
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}