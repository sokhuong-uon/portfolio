import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/tabs';

export function SketchTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="webgl">WebGL</TabsTrigger>
        <TabsTrigger value="html">HTML</TabsTrigger>
        <TabsTrigger value="design">Design</TabsTrigger>
      </TabsList>
      <TabsContent value="webgl">webgl sketches here</TabsContent>
      <TabsContent value="html">HTML sketches here</TabsContent>
      <TabsContent value="design">Design sketches here</TabsContent>
    </Tabs>
  );
}
