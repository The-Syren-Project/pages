import { readdir, stat, writeFile } from 'fs/promises';
import { join } from 'path';

const BLOG_MAP_OUT = './public/blog_map.json';
const BLOG_MAP_DIR = './public/blogs';

(
    async () => {
        const getList = async (path = '', key = '') => {
            const here = join(BLOG_MAP_DIR, path);

            const fileList = await readdir(here);

            const m = await Promise.all(fileList.map(async (file) => {
                const s = await stat(join(here, file));
                if (s.isDirectory())
                    return getList(join(path, file), file);

                return file;
            }));

            let ret = {
                pages: [],
                nested: {}
            };
            m.forEach((n) => {
                if (typeof n === 'object')
                    ret.nested = {
                        ...ret.nested,
                        ...n
                    };
                else
                    ret.pages.push(n);
            });

            if (!key)
                return ret;

            return { [key]: ret };
        };

        const mapping = await getList();

        await writeFile(BLOG_MAP_OUT, JSON.stringify(mapping, null, 4));
    }
)();