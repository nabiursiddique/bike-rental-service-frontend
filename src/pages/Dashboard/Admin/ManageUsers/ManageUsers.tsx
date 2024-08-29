import Loading from '@/components/CommonComponents/Loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from '@/redux/features/users/users.api';
import { TUser } from '@/types/userType';
import { RefreshCcw } from 'lucide-react';
import toast from 'react-hot-toast';

const ManageUsers = () => {
  const { data, isLoading: isUserLoading } = useGetAllUsersQuery(undefined);
  const [updateUserRole, { isLoading: isUpdatingRole }] =
    useUpdateUserRoleMutation();

  const users = data?.data;

  // role change
  const handleRoleChange = async (userId: string, role: string) => {
    const updatedUserRole = {
      id: userId,
      role: role,
    };
    try {
      await updateUserRole(updatedUserRole);
      toast.success('Role changed successfully');
    } catch (err) {
      console.log(err);
      toast.error('Role change operation failed');
    }
  };

  if (isUserLoading) {
    return <Loading />;
  }

  return (
    <div className='p-6 font-[oswald] '>
      <div className='flex items-center mb-4 gap-2 text-orange-600 text-2xl'>
        <h2 className='font-bold '>Manage Users</h2>
      </div>

      <Table className='mt-6 border border-orange-600'>
        <TableHeader>
          <TableRow className='border border-orange-600'>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className='text-center text-orange-600'>
                No User Found
              </TableCell>
            </TableRow>
          ) : (
            users.map((user: TUser) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {isUpdatingRole ? (
                    <div className='flex gap-2'>
                      <RefreshCcw className='mr-2 h-4 w-4 animate-spin text-orange-600' />
                      <p>Loading</p>
                    </div>
                  ) : (
                    <select
                      name='role'
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id as string, e.target.value)
                      }
                      className='select-filter md:w-64 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                    >
                      <option value='admin'>Admin</option>
                      <option value='user'>User</option>
                    </select>
                  )}
                </TableCell>
                <TableCell>
                  {/* Delete modal */}
                  {/* <ConfirmationModal
                    variant={'redBtn'}
                    btnName={'Delete'}
                    alertTitle={'Are You Sure?'}
                    alertMessage={
                      "You cannot recover the data once it's deleted."
                    }
                    confirm={'Confirm'}
                    cancel={'Cancel'}
                    onConfirm={}
                    info={}
                    onOpen={}
                  /> */}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsers;
