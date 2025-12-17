import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ConnectStore = () => {
  const handleConnectShopify = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const shopifyAuthUrl = `https://shopify.com/admin/oauth/authorize?client_id=${import.meta.env.VITE_SHOPIFY_API_KEY}&scope=read_products,write_products,read_orders&redirect_uri=${encodeURIComponent(import.meta.env.VITE_REDIRECT_URI)}&state=${user.id}`;
    window.location.href = shopifyAuthUrl;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Connect Your Shopify Store</CardTitle>
          <CardDescription>
            Connect your Shopify store to start analyzing your data with Dagala Analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleConnectShopify}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Connect Shopify Store
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConnectStore;