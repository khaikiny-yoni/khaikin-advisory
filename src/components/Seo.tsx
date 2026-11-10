import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seo from '@/data/seo.json';

type PageMeta = { title: string; description: string };
const pages = seo.pages as Record<string, PageMeta>;

function setMeta(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Keeps title, description and canonical in sync on client-side navigation. */
export function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
    const meta = pages[key] ?? pages['/'];
    const url = `${seo.site}${key === '/' ? '/' : key + '/'}`;
    document.title = meta.title;
    setMeta('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }), 'content', meta.description);
    setMeta('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);
    setMeta('meta[property="og:url"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:url'); return m; }, 'content', url);
    setMeta('meta[property="og:title"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:title'); return m; }, 'content', meta.title);
    setMeta('meta[property="og:description"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:description'); return m; }, 'content', meta.description);
  }, [pathname]);
  return null;
}
