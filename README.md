# Plantilla web para refaccionaria / taller automotriz

Sitio estático (HTML + CSS + JS, sin build). Se abre con cualquier hosting estático
(Netlify, Vercel, GitHub Pages, hosting compartido).

Para verlo en local:

```bash
python -m http.server 8765
```

y abrir `http://localhost:8765`.

## Adaptarlo a un cliente (5 minutos)

Todo está en el bloque `CONFIG` y las listas al inicio de `main.js`:

| Qué | Dónde |
|---|---|
| Logo y nombre | `CONFIG.brand` |
| WhatsApp, teléfono, correo, dirección, horarios | `CONFIG` |
| Redes sociales | `CONFIG.social` |
| Envío gratis desde | `CONFIG.freeShippingFrom` |
| Categorías, productos, servicios, testimonios | `CATEGORIES`, `PRODUCTS`, `SERVICES`, `TESTIMONIALS` |
| Colores | variables `:root` en `styles.css` |
| Textos legales / FAQ | objeto `MODALS` en `main.js` |
| Fotos hero / nosotros / CTA | atributos `style` en `index.html` (URLs de Unsplash de demostración) |
| Recibir cotizaciones por correo/CRM | `CONFIG.formEndpoint` (Formspree, Make, etc.) |

También hay que cambiar el mapa (iframe en la sección Contacto), el JSON-LD del `<head>`
y quitar el aviso "Sitio de demostración" (`#ribbon` en `index.html`).

## Estado funcional (honesto)

| Función | Estado |
|---|---|
| Navegación, menú móvil, enlaces activos | Implementado y probado |
| Buscador, filtros, sugerencias, orden, "ver más" | Implementado y probado |
| Carrito (persistente), cantidades, total, envío gratis | Implementado y probado |
| Pedido → mensaje de WhatsApp con datos del cliente | Implementado y probado (el mensaje se genera; no se probó el envío real) |
| Cotización → WhatsApp | Implementado |
| Cotización → servicio externo (`formEndpoint`) | Requiere un servicio externo; no probado |
| Adjuntar foto en la cotización | **No se envía**: WhatsApp no admite archivos por enlace; el cliente la envía en el chat |
| Cuenta de usuario | Solo demostración (datos en el navegador, sin contraseña ni servidor) |
| Pagos en línea, inventario real, panel admin | **No incluidos**; requieren backend/servicio (p. ej. Stripe, Mercado Pago, Shopify) |
| Mapa | Ubicación genérica; reemplazar |
| Rendimiento / accesibilidad (Lighthouse) | No medido |

## Notas
- Las imágenes de Unsplash son temporales; para producción usar fotos propias optimizadas (WebP).
- Los testimonios, precios, cifras y textos legales son ficticios y deben sustituirse.
- `dataLayer` recibe los eventos `add_to_cart` y `begin_checkout` por si se instala Google Tag Manager.
