import type { Metadata } from "next";
import Link from "next/link";
import CookieSettings from "@/components/CookieSettings";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad de PAS Piedra Angular Solutions: qué datos personales tratamos, con qué finalidad, con quién los compartimos y cómo ejercer tus derechos conforme a la Ley 25.326.",
  alternates: { canonical: "https://pasoluciones.com.ar/politica-de-privacidad" },
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <span className="section-top-title">Legales</span>
      <h1 className="section-title">Política de Privacidad</h1>
      <p className="legal-updated">Última actualización: 3 de septiembre de 2026</p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable de la base de datos y del tratamiento de los datos personales recolectados a
        través de este sitio es <strong>MENA BRACA, LUIS DANIEL</strong>{" "}
        (en adelante, &ldquo;PAS&rdquo; o
        &ldquo;nosotros&rdquo;), CUIT <strong>20-19125948-4</strong> (Responsable Inscripto), con
        domicilio legal en{" "}
        <strong>
          Pres. Domingo Faustino Sarmiento 326, B1708EKH Morón, Provincia de Buenos Aires
        </strong>
        , República Argentina, que opera comercialmente bajo el
        nombre <strong>PAS</strong>, <strong>Piedra Angular Solutions</strong> o{" "}
        <strong>Piedra Angular Soluciones</strong>, y es titular del sitio web{" "}
        <Link href="/">pasoluciones.com.ar</Link>.
      </p>
      <p>
        Canales de contacto en materia de privacidad: correo electrónico{" "}
        <a href="mailto:ventas@pasoluciones.com.ar">ventas@pasoluciones.com.ar</a> y teléfono{" "}
        <a href="tel:+5491130144852">+54 9 11 3014-4852</a>.
      </p>

      <h2>2. Alcance y normativa aplicable</h2>
      <p>
        Esta política describe cómo tratamos los datos personales de las personas que visitan
        pasoluciones.com.ar o se comunican con nosotros a través de los canales publicados en el
        sitio. Se rige por la Ley N.º 25.326 de Protección de los Datos Personales, su Decreto
        Reglamentario N.º 1558/2001 y las normas complementarias dictadas por la Agencia de Acceso a
        la Información Pública (AAIP).
      </p>

      <h2>3. Qué datos recolectamos</h2>

      <h3>3.1. Datos que nos proporcionás voluntariamente</h3>
      <p>
        El formulario de contacto del sitio solicita <strong>nombre completo</strong>,{" "}
        <strong>servicio de interés</strong> y el <strong>texto de tu consulta</strong>, y de
        forma <strong>opcional</strong> el <strong>nombre de la empresa</strong> desde la que
        realizás la consulta. Este
        formulario <strong>no envía información a nuestros servidores</strong>: al presionar
        &ldquo;Enviar mensaje por WhatsApp&rdquo;, tu navegador arma un mensaje con esos datos y abre
        WhatsApp para que vos decidas enviarlo. Recibimos los datos únicamente cuando enviás el
        mensaje, y quedan alojados en tu cuenta de WhatsApp y en la nuestra.
      </p>
      <p>
        Si nos escribís por correo electrónico o nos llamás, tratamos los datos que incluyas en esa
        comunicación: nombre, correo, teléfono, domicilio de la obra y detalles de la consulta.
      </p>

      <h3>3.2. Datos de navegación</h3>
      <p>
        Si prestás tu consentimiento en el aviso de cookies, las herramientas de medición descriptas
        en la sección 7 registran datos técnicos y de uso: dirección IP (truncada o seudonimizada
        según la herramienta), tipo de dispositivo y navegador, sistema operativo, idioma, páginas
        vistas, tiempo de permanencia, origen de la visita e interacciones con la interfaz (clics y
        desplazamiento). No utilizamos esos datos para identificarte por nombre.
      </p>

      <h3>3.3. Datos que no tratamos</h3>
      <p>
        No solicitamos ni tratamos datos sensibles en los términos del art. 2 de la Ley 25.326
        (origen racial o étnico, opiniones políticas, convicciones religiosas o filosóficas,
        afiliación sindical, información referente a la salud o a la vida sexual). Tampoco
        procesamos pagos ni datos de tarjetas a través del sitio.
      </p>

      <h2>4. Finalidad del tratamiento</h2>
      <ul>
        <li>Responder consultas y elaborar presupuestos de los servicios solicitados.</li>
        <li>Coordinar visitas técnicas, relevamientos y la ejecución de trabajos contratados.</li>
        <li>
          Cumplir obligaciones legales, fiscales y contables derivadas de la relación comercial.
        </li>
        <li>
          Medir el uso del sitio, detectar errores y mejorar su contenido y rendimiento (únicamente
          con tu consentimiento previo).
        </li>
      </ul>
      <p>
        No utilizamos tus datos para elaborar perfiles con efectos jurídicos, ni los cedemos ni
        vendemos con fines publicitarios de terceros.
      </p>

      <h2>5. Base legal y carácter de los datos</h2>
      <p>
        El tratamiento se funda en tu <strong>consentimiento libre, expreso e informado</strong>{" "}
        (art. 5 de la Ley 25.326), que otorgás al enviarnos una consulta o al aceptar el aviso de
        cookies; en la <strong>ejecución de una relación contractual o precontractual</strong>{" "}
        cuando solicitás un presupuesto o contratás un servicio; y en el{" "}
        <strong>cumplimiento de obligaciones legales</strong> a nuestro cargo.
      </p>
      <p>
        Proporcionar tus datos es voluntario. No hacerlo solo implica que no podremos responder tu
        consulta ni prestarte el servicio.
      </p>

      <h2>6. Con quién compartimos los datos</h2>
      <p>Podemos compartir datos personales con:</p>
      <ul>
        <li>
          <strong>WhatsApp / Meta Platforms, Inc.</strong> — al usar el formulario o el botón de
          WhatsApp, el mensaje se transmite y almacena en la infraestructura de ese servicio, sujeto
          a sus propias políticas.
        </li>
        <li>
          <strong>Google LLC</strong> — Google Tag Manager y las etiquetas de medición configuradas
          en él, para la analítica del sitio.
        </li>
        <li>
          <strong>Contentsquare SA</strong> — análisis de experiencia de uso: mapas de calor y
          métricas de interacción agregadas.
        </li>
        <li>
          <strong>Proveedores de alojamiento web y de correo electrónico</strong>, que actúan como
          encargados de tratamiento por nuestra cuenta y orden.
        </li>
        <li>
          <strong>Autoridades públicas</strong>, cuando exista una orden judicial o un requerimiento
          legal que nos obligue a hacerlo.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores están radicados fuera de la República Argentina, por lo que el
        uso del sitio puede implicar una <strong>transferencia internacional de datos</strong> en los
        términos del art. 12 de la Ley 25.326. Al aceptar esta política y el aviso de cookies,
        prestás tu consentimiento para dicha transferencia.
      </p>

      <h2>7. Cookies y tecnologías similares</h2>
      <p>
        Una cookie es un archivo que un sitio guarda en tu dispositivo para recordar información
        entre visitas. En pasoluciones.com.ar usamos:
      </p>
      <ul>
        <li>
          <strong>Almacenamiento técnico necesario.</strong> Se limita a recordar tu decisión sobre
          el aviso de cookies, guardada localmente en tu navegador bajo la clave{" "}
          <code>pas-cookie-consent</code>. No requiere consentimiento y no se comparte con terceros.
        </li>
        <li>
          <strong>Cookies analíticas de terceros.</strong> Google Tag Manager y Contentsquare, con
          las finalidades descriptas en la sección 4.
        </li>
      </ul>
      <p>
        <strong>
          Las cookies analíticas no se cargan hasta que las aceptás en el aviso de cookies.
        </strong>{" "}
        Si las rechazás, esos scripts no se ejecutan. Podés revisar tu decisión en cualquier
        momento:
      </p>
      <p className="legal-actions">
        <CookieSettings />
      </p>
      <p>
        También podés bloquear o eliminar cookies desde la configuración de privacidad de tu
        navegador. El bloqueo de las cookies analíticas no afecta el funcionamiento del sitio.
      </p>

      <h2>8. Plazo de conservación</h2>
      <p>
        Conservamos los datos de contacto y de la consulta mientras dure la gestión comercial y,
        luego, durante los plazos de prescripción aplicables a la relación contractual y a las
        obligaciones fiscales y contables. Los datos de navegación se conservan según los plazos de
        retención propios de cada herramienta analítica. Cumplidos esos plazos, los datos se suprimen
        o se anonimizan.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        Adoptamos las medidas técnicas y organizativas exigidas por el art. 9 de la Ley 25.326 para
        resguardar la confidencialidad e integridad de los datos: transmisión cifrada del sitio
        mediante HTTPS, acceso restringido a las casillas y dispositivos donde se reciben las
        consultas, y contratación de proveedores con estándares de seguridad reconocidos. Ningún
        sistema es completamente infalible, por lo que no podemos garantizar la seguridad absoluta de
        la información transmitida por Internet.
      </p>

      <h2>10. Menores de edad</h2>
      <p>
        El sitio está dirigido a personas mayores de 18 años y a profesionales o empresas del rubro
        de la construcción. No recolectamos deliberadamente datos de menores de edad. Si advertimos
        que recibimos datos de un menor sin autorización de sus representantes legales, procederemos
        a eliminarlos.
      </p>

      <h2>11. Tus derechos</h2>
      <p>
        Podés ejercer en forma gratuita los derechos de <strong>acceso</strong>,{" "}
        <strong>rectificación</strong>, <strong>actualización</strong> y <strong>supresión</strong>{" "}
        de tus datos personales, así como retirar el consentimiento prestado, escribiendo a{" "}
        <a href="mailto:ventas@pasoluciones.com.ar">ventas@pasoluciones.com.ar</a> o a nuestro
        domicilio legal, acreditando tu identidad. Responderemos dentro de los diez (10) días
        corridos en el caso del derecho de acceso, y de los cinco (5) días hábiles en el caso de
        rectificación, actualización o supresión, conforme los arts. 14 y 16 de la Ley 25.326.
      </p>
      <p className="legal-note">
        El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los
        mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un
        interés legítimo al efecto, conforme lo establecido en el artículo 14, inciso 3 de la Ley
        N.º 25.326.
      </p>
      <p className="legal-note">
        La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley
        N.º 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes
        resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de
        protección de datos personales.
      </p>

      <h2>12. Enlaces a sitios de terceros</h2>
      <p>
        El sitio contiene enlaces a servicios y páginas de terceros: WhatsApp, el sitio del
        proveedor de desarrollo y los sitios web de las empresas cuyos logotipos se exhiben en la
        sección &ldquo;Clientes&rdquo;, que se abren en una pestaña nueva. Esta política no alcanza
        el tratamiento que esos terceros realicen de tus datos; te recomendamos consultar sus
        propias políticas de privacidad.
      </p>

      <h2>13. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para reflejar cambios normativos, técnicos o en nuestros
        servicios. La versión vigente es siempre la publicada en esta página, con su fecha de última
        actualización. Si el cambio fuera sustancial, lo anunciaremos de forma visible en el sitio.
      </p>

      <p className="legal-footer-note">
        Ver también los <Link href="/terminos-y-condiciones">Términos y Condiciones</Link> del sitio.
      </p>
    </>
  );
}
