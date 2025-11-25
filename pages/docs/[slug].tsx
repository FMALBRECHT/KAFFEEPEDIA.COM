import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import DocLayout from "../../components/DocLayout";

type DocProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: any;
  };
};

export default function DocPage({ source, frontMatter }: DocProps) {
  return (
    <DocLayout frontMatter={frontMatter}>
      <MDXRemote {...source} />
    </DocLayout>
  );
}

const CONTENT_PATH = path.join(process.cwd(), "content", "docs");

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(CONTENT_PATH).filter((f) => f.endsWith(".mdx"));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, "") },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string) || "";
  const fullPath = path.join(CONTENT_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data || {},
    },
  };
};
